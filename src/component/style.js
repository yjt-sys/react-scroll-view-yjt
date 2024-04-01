import styled from 'styled-components';
export const ViewWrapper = styled.div`
    position: relative;
    padding: 8px 0;
    .scroll{
      overflow: hidden;
      .scroll-content{
        display: flex;
        transition: transform 250ms ease;
      }
    }
    
    .icon{
      position: absolute;
      z-index: 10;
      cursor: pointer;
      &.iconLeft{
        top: 50%;
        left: 0;
        transform: translate(-50%,-50%);
      }
      &.iconRight{
        top: 50%;
      right: 0;
      transform: translate(50%,-50%);
      }
    }
  `