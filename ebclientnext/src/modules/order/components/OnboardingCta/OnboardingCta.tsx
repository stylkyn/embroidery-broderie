'use client';

import { Button, Container, Text } from '@medusajs/ui';
import { resetOnboardingState } from 'app/actions';
import { OnboardingCtaProps } from './OnboardingCta.types';

export const OnboardingCta = ({ orderId }: OnboardingCtaProps) => {
    return (
        <Container className="max-w-4xl h-full bg-ui-bg-subtle w-full">
            <div className="flex flex-col gap-y-4 center p-4 md:items-center">
                <Text className="text-ui-fg-base text-xl">
                    Your test order was successfully created! 🎉
                </Text>
                <Text className="text-ui-fg-subtle text-small-regular">
                    You can now complete setting up your store in the admin.
                </Text>
                <Button
                    className="w-fit"
                    size="xlarge"
                    onClick={() => resetOnboardingState(orderId)}
                >
                    Complete setup in admin
                </Button>
            </div>
        </Container>
    );
};
