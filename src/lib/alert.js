import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.compat.css'

const alert = ({title,message,type}) => {
    title = title? title:"Alert!";
    message = message? message: "Please contact an advisor for further assistance";
    type = type? type:"danger";

    let notification = {
        title,
        message,
        type,
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
    }

    store.addNotification(notification)
}

export default alert