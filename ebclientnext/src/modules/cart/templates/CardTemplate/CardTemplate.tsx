import { ItemsTemplate } from '../ItemsTemplate';
import { SummaryTemplate } from '../SummaryTemplate/SummaryTemplate';
import { EmptyCartMessage } from '../../components/EmptyCardMessage';
import { SignInPrompt } from '../../components/SingInPrompt';
import { Divider } from '@modules/common/components/Divider';
import { CardTemplateProps } from './CardTemplate.types';

export const CartTemplate = ({ cart, customer }: CardTemplateProps) => {
    return (
        <div className="py-12">
            <div className="content-container">
                {cart?.items.length ? (
                    <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
                        <div className="flex flex-col bg-white py-6 gap-y-6">
                            {!customer && (
                                <>
                                    <SignInPrompt />
                                    <Divider />
                                </>
                            )}
                            <ItemsTemplate
                                region={cart?.region}
                                items={cart?.items}
                            />
                        </div>
                        <div className="relative">
                            <div className="flex flex-col gap-y-8 sticky top-12">
                                {cart && cart.region && (
                                    <>
                                        <div className="bg-white py-6">
                                            <SummaryTemplate cart={cart} />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <EmptyCartMessage />
                    </div>
                )}
            </div>
        </div>
    );
};
