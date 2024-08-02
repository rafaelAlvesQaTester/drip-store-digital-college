import styled from "styled-components";
import leftArrow from "./imgs/arrow-left.svg"
import rightArrow from "./imgs/arrow-right.svg"
import { useState } from "react";

const Gallery = ({images}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const sliderImgs = images.map((img, index)=>{
        if(index == 0){
            return <img key={index} style={{marginLeft:`${currentImage}vw`}} src={img.src} />
        }
        return <img key={index} src={img.src} />
    })
    return ( 
        <>
            <StyledGallery >
                <div className="imgContainer">
                    {
                        sliderImgs
                    }
                </div>
                <div className="controlls">
                    <img onClick={() =>{
                        setCurrentImage((prev) => {
                            if(!prev==0){
                                return prev += 100
                            }
                            return prev
                        })
                    }} src={leftArrow} />
                    <img onClick={() =>{
                        setCurrentImage((prev) => {
                            if(prev==(images.length-1)*-100){
                                return prev 
                            }
                            return prev -= 100
                        })
                    }} src={rightArrow} />         
                </div>
                <div className="content">
                    <div className="firstContainer">
                        <p>
                        Melhores ofertas personalizadas
                        </p>
                        <h2>
                        Queima de stoque Nike 🔥
                        </h2>
                    </div>
                    <div className="secondContainer">
                        <p>
                        Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                        </p>
                        <button>
                            Ver Ofertas
                        </button>
                    </div>
                </div>
                <div className="sliderIconContainer">
                    {images.map(
                        (image, index) => {
                            return <div id={index== (currentImage/-100) ? "marked": ""} className="sliderIcon"></div>
                        }
                    )}
                </div>
            </StyledGallery>
        </> 
    );
}
 
export default Gallery;
const StyledGallery = styled.div`
    position: relative;
    & div.imgContainer{
        width: 100vw;
        white-space: nowrap;
        overflow: hidden;
        & img {
            width: 100%;
            transition: 1s;
        }
    }
    & div.sliderIconContainer{
        display: flex;
        justify-content: center;
        gap: 10px;
        & div.sliderIcon{
            width: 12px;
            height: 12px;
            background-color: #CCCCCC;
            border-radius: 50%;
            &#marked{
                background-color: #C92071;
                
            }
        } 
    }
    & div.controlls{
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 50%;
        transform: translate(0,-50%);
        width: 100%;
        padding: 0 20px;
        & img {
            cursor: pointer;
            transition: 200ms;
            &:hover{
                transform: scale(1.2);
            }
        }
    } 
    & div.content{
        position: absolute;
        top: 124px;
        left: 100px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 510px;
        & div.firstContainer{
            display: flex;
            flex-direction: column;
            gap: 20px;
            & p{
                font-weight: 700;
                font-size: 16px;
                color: #F6AA1C;
            }
            & h2{
                font-weight: 800;
                font-size: 64px;
                color: #1F1F1F;
                
            }

        }
        & div.secondContainer{
            display: flex;
            flex-direction: column;
            gap: 40px;
            & p{
                color: #474747;
                letter-spacing: 0.75px;
                font-size: 18px;
                line-height: 34px;
                font-weight: 400px;
            } 
            & button{
                width: 220px;
                height: 48px;
                color: #F5F5F5;
                background-color: #C92071;
                border:none;
                border-radius: 10px;
                font-weight: 700;
            }
        }
    }
    & div.itensButtons{
        & input{
            outline: none;
            border: none;
            
        } 
    }
  

`