import { useForm } from '../hooks/useForm';

export const FormComponent = () => {

    const initialForm = {
        email: '',
        password: ''
    }

    const { formState, onInputChange } = useForm(initialForm);

    const { email, password } = formState

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        name='email'
                        value={email}
                        onChange={onInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name='password'
                        value={password}
                        onChange={onInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
