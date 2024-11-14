import { prisma } from "@/lib/prisma";
import { SubscriptionStatus } from "@prisma/client";

type SubscribeParams = {
  userId: string;
  planId: string;
  autoRenew?: boolean;
};

export const subscriptionService = {
  // Subscribe user to a plan
  async subscribe({ userId, planId, autoRenew = false }: SubscribeParams) {
    try {
      // Check if user already has an active subscription
      const existingSubscription = await prisma.subscription.findFirst({
        where: {
          userId,
          status: SubscriptionStatus.ACTIVE,
        },
      });

      if (existingSubscription) {
        throw new Error("User already has an active subscription");
      }

      // Get plan details to calculate endDate
      const plan = await prisma.plan.findUnique({
        where: { id: planId },
      });

      if (!plan) {
        throw new Error("Plan not found");
      }

      // Calculate end date based on plan period
      const startDate = new Date();
      const endDate = new Date(startDate);
      
      if (plan.period === "semanal") {
        endDate.setDate(endDate.getDate() + 7);
      } else if (plan.period === "mensal") {
        endDate.setMonth(endDate.getMonth() + 1);
      }

      // Create new subscription
      const subscription = await prisma.subscription.create({
        data: {
          userId,
          planId,
          startDate,
          endDate,
          autoRenew,
          status: SubscriptionStatus.ACTIVE,
        },
        include: {
          plan: true,
        },
      });

      return subscription;
    } catch (error) {
      console.log(error);
    }
  },

  // Cancel subscription
  async cancelSubscription(userId: string) {
    try {
      const subscription = await prisma.subscription.findFirst({
        where: {
          userId,
          status: SubscriptionStatus.ACTIVE,
        },
      });

      if (!subscription) {
        throw new Error("No active subscription found");
      }

      const updatedSubscription = await prisma.subscription.update({
        where: { id: subscription.id },
        data: {
          status: SubscriptionStatus.CANCELLED,
          autoRenew: false,
        },
        include: {
          plan: true,
        },
      });

      return updatedSubscription;
    } catch (error) {
      console.log(error);
    }
  },

  // Get user's current subscription with plan details
  async getUserSubscription(userId: string) {
    try {
      const subscription = await prisma.subscription.findFirst({
        where: {
          userId,
          status: SubscriptionStatus.ACTIVE,
        },
        include: {
          plan: {
            include: {
              benefits: {
                include: {
                  benefit: true,
                },
              },
            },
          },
        },
      });

      return subscription;
    } catch (error) {
      throw error;
    }
  },

  // Check subscription status and update if expired
  async checkSubscriptionStatus(userId: string) {
    try {
      const subscription = await prisma.subscription.findFirst({
        where: {
          userId,
          status: SubscriptionStatus.ACTIVE,
        },
      });

      if (!subscription) {
        return null;
      }

      // Check if subscription has expired
      if (new Date() > subscription.endDate) {
        const updatedSubscription = await prisma.subscription.update({
          where: { id: subscription.id },
          data: {
            status: SubscriptionStatus.EXPIRED,
          },
          include: {
            plan: true,
          },
        });

        return updatedSubscription;
      }

      return subscription;
    } catch (error) {
      throw error;
    }
  },
}; 