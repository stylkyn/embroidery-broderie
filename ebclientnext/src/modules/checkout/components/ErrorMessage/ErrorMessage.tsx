import { ErrorMessageProps } from './ErrorMessage.types';

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
    if (!error) {
        return null;
    }

    return (
        <div className="pt-2 text-rose-500 text-small-regular">
            <span>{error}</span>
        </div>
    );
};
