import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import TEXT_CHANNEL from '@salesforce/messageChannel/TextMessageChannel__c';

export default class Publisher extends LightningElement {
    @wire(MessageContext)
    messageContext;

    handleTextChange(event) {
        const input = event.target.value;
        publish(this.messageContext, TEXT_CHANNEL, {
            text: input
        });
    }
}
