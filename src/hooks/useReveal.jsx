import { useEffect, useRef } from 'react'

export default function useReveal(){
  const ref = useRef(null)
  useEffect(()=>{
    const el = ref.current
    if(!el) return
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('show')
      })
    }, {threshold: 0.12})
    // observe children for better stagger
    const children = el.querySelectorAll('.fade-in')
    if(children.length){
      children.forEach(c=>obs.observe(c))
    } else {
      obs.observe(el)
    }
    return ()=>obs.disconnect()
  },[])
  return ref
}
