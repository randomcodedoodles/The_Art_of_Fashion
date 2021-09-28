
import { ContactUsProvider } from "./ContactUsContext"
import { ContactForm } from "./ContactForm"
export const ContactUs = () => {
    console.log('hello')
    return (
        <ContactUsProvider> <ContactForm /> </ContactUsProvider>
    )
}