export const InputFormPhone = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, phoneNumber } = event.target.elements;
        console.log(name.value, phoneNumber.value);
    }
    
    return (
        <form autoComplete="off" onSubmit={handleSubmit}>

            <lable htmlFor="name">
                Full Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
/>
            </lable>

            <lable htmlFor="name">
                Phone number
                <input
                    type="tel"
                    name="phoneNumber"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />  
            </lable>
                
            <button type="submit">Add</button>
        </form>
    );
}