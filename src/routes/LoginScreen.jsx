import { useContext } from 'react'
import { useForm } from '../hooks/useForm'
import { UserContext } from '../context/UserContext'

export const LoginScreen = () => {

    const initialForm = {
        name: '',
        technology: '',
        email: ''
    }

    const { formState, name, technology, email, onInputChange} = useForm(initialForm)
    
    const {setUser} = useContext(UserContext)

    const onSubmit = (e) => {
        e.preventDefault()
        setUser(formState)
    }

    return (
        <>
            <div>LoginScreen</div>
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" htmlFor="name">Name</span>
                    <input type="text" className="form-control" placeholder="Username" name="name"
                        value={name} onChange={onInputChange} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" htmlFor="technology">Technology</span>
                    <input type="text" className="form-control" placeholder="Username" name="technology" 
                        value={technology} onChange={onInputChange}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" htmlFor="email">Email</span>
                    <input type="text" className="form-control" placeholder="Username" name="email" 
                        value={email} onChange={onInputChange}/>
                </div>
                <button type='submit' className='btn btn-primary btn-sm'>Register</button>
            </form>
        </>

    )
}
