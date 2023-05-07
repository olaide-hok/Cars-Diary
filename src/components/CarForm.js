import {useDispatch, useSelector} from 'react-redux'
import {addCar, changeCost, changeName} from '../store'

const CarForm = () => {
    const {cost, name} = useSelector((state) => {
        return {
            cost: state.form.cost,
            name: state.form.name,
        }
    })
    const dispatch = useDispatch()
    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value))
    }
    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0
        dispatch(changeCost(carCost))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addCar({name, cost})) //from line 5
    }
    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>

                    {/* cost */}
                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            className="input is-expanded"
                            value={cost || ''}
                            onChange={handleCostChange}
                            type="number"
                        />
                    </div>
                </div>
            </form>
            <div className="field">
                <button className="button is-link">Submit</button>
            </div>
        </div>
    )
}

export default CarForm
