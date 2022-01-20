import { MAIL_OK } from '../type/type';

export function mailInputAction (mailInput) {
    return {
        type: MAIL_OK,
        mailInput
    };
};