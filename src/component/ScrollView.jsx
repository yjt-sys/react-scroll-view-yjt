import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import LeftIcon from './svg/LeftIcon.jsx'
import RightIcon from './svg/RightIcon.jsx'
const ScrollView = memo((props) => {
  /**
   * 定义内部的状态
   */
  const [showRight, setShowRight] = useState(false)
  const [showLeft, setShowLeft] = useState(false)

  const totalDistanceRef = useRef()
  const [posIndex, setPosIndex] = useState(0)

  /**
   * 组件渲染完毕,判断是否显示右侧的按钮
   */
  const scrollContentRef = useRef(null)
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth//一共可以滚动的高度
    const clientWidth = scrollContentRef.current.clientWidth//当前可以显示的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newElOffsetLeft = newEl.offsetLeft
    console.log(newEl.offsetLeft);
    scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`
    setPosIndex(newIndex)
    //是否继续显示右侧按钮
    setShowRight(totalDistanceRef.current > newElOffsetLeft)
    setShowLeft(newElOffsetLeft > 0)
  }

  return (
    <ViewWrapper style={props.style}>
      {showLeft && (
        <div onClick={e => controlClickHandle(false)}>
          {
            props.leftIcon?<div className='icon iconLeft'>{props.leftIcon}</div>:<LeftIcon className='icon iconLeft'></LeftIcon>
          }
        </div>
      )}
      {showRight && (
        <div onClick={e => controlClickHandle(true)}>
          {
            props.rightIcon?<div className='icon iconRight'>{props.rightIcon}</div>:<RightIcon className='icon iconRight'></RightIcon>
          }
        </div>
      )}
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>

    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView
