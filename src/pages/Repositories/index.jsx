import { useLocation } from "react-router-dom"

export const Repositories = () => {
    const {state } = useLocation()
    return (
        <div>
    <h1>{state.profile.name}</h1>
        </div>
    )
}