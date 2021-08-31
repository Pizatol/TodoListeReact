
import React, { useState } from 'react'
import {v4 as uuidV4} from 'uuid'
import Item from './Item'

export default function Form() {

	const [dataArr, setDataArr] = useState([
	 
		{txt: "Promner le chien", id: uuidV4()},
		{txt: "faire du sport", id: uuidV4()},
		{txt: "Apprendre à coder avec React", id: uuidV4()},
	])

	const [stateInput, setStateInput] = useState()



	
	const deleteElement = id => {		
		const filteredState = dataArr.filter(item => {
			return item.id !== id;
		})
		setDataArr(filteredState)
	}

	const linkedInput = (e) => {
		setStateInput(e)
	}

	const addTodo = (e) => {
		e.preventDefault()
		const newArr = [...dataArr]

		const newTodo = {}
		newTodo.txt = stateInput
		newTodo.id = uuidV4()

		newArr.push(newTodo)
		setDataArr(newArr)

		setStateInput('')
	}





	return (
		
		<div>
			

			<div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

				<form
					onSubmit={ e => addTodo(e)}
					className="mb-3">
					<label htmlFor="todo" className="form-label mt-3">
						Chose à faire
					</label>
					<input
						onInput={e => linkedInput(e.target.value)}
						type="text"
						value = {stateInput}
						className="form-control"
						id="todo" />
					<button className="mt-2 btn btn-primary d-block">Envoyer</button>

			</form>

				<h2>Liste des choses à faire : </h2>
				<ul className="list-group">
					{dataArr.map((item, index) => {
						return (
							<Item
								txt={item.txt}
								key={item.id}
								id={item.id}
								delFunc={deleteElement}
							/>
						)
					})}
				</ul>
			</div>


		</div>
	)
}
