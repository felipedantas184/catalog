import styled from "styled-components"

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 20px 20px;
  overflow: hidden;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s ease-in-out;
    }
  }
`
export const Category16 = styled.h2`
  color: #13131A;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`
export const Title16 = styled.h3`
  color: #13131A;
  font-size: 16px;
  font-weight: 400;
`
export const Price18 = styled.h4`
  color: #13131A;
  font-size: 18px;
  font-weight: 600;
`