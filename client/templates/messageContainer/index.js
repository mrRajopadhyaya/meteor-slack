import './index.html';






Template.messageContainer.helpers({
    messages(){
        return [{
            body:'Hello everyone'
        },{
            body:'this is some awesome text'
        },{
            body:"this is some more awesome text"
        }]
    }
})