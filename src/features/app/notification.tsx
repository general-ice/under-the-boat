import React from 'react'
import {NotificationType} from "./model/type";

const NotificationMap: Record<NotificationType, React.ReactElement<any>> = {
    [NotificationType.registerError]: <div></div>,
    [NotificationType.somethingElse]: <div></div>
}

export const Notification = () => {

}