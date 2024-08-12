import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'
import { buyIcecream } from '../redux/icecream/iceAction'
import { buyCups } from '../redux/CupCake/cupActions'

export default function HooksCakeContainer() {
    const numCakes = useSelector(state => state.cake.numCakes)
    const numIcecreams = useSelector(state => state.icecream.numIcecreams)
    const numCups = useSelector(state => state.cup.numCups)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>number of cakes-- {numCakes}</h2>
        <button onClick={()=>dispatch(buyCake())}> buy cake </button>
        <h2>number of icecream-- {numIcecreams}</h2>
        <button onClick={()=>dispatch(buyIcecream())}> buy icecream </button>
        <h2>number of CupCakes-- {numCups}</h2>
        <button onClick={()=>dispatch(buyCups())}> buy CupCakes </button>
    </div>
  )
}