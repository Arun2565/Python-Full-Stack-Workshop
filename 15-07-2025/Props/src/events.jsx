function DoubleClickEvent(){

}

function MouseInEvent(){
    const handleMouseEnter = () => alert('Mouse entered');

    return{
      
    }
}


export function KeyBoardEvent(){
    const handleKeyPress = (event ) => {
        if (event.key == 'Enter'){
            alert('Enter key pressed!');
                }
    };
    return <input type='text' onKeyPress={handleKeyPress} placeholder="Press Enter"/>;
}

// KeyBoard Events
