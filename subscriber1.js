import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import TEXT_CHANNEL from '@salesforce/messageChannel/TextMessageChannel__c';

export default class Subscriber1 extends LightningElement {
    @wire(MessageContext)
    messageContext;

    message = '';

    connectedCallback() {
        subscribe(this.messageContext, TEXT_CHANNEL, (message) => {
            this.message = message.text;
        });
    }
}
