
import Invest from './components/Invest';
import useSearch from './hooks/useSearch';
import styled from 'styled-components';
export default function Search() {
    const {
        active,
        handleActive
    } = useSearch();

    return (
        <DivStyled className='md:absolute relative top-[200px] w-[330px] mx-auto max-[320px]:!w-[330px] md:mx-[50px] md:top-[380px] lg:top-[480px] 2xl:top-[500px] 2xl:left-[450px] lg:left-[170px] z-[10000] h-auto flex flex-col lg:justify-normal md:justify-center justify-center text-center '>
            <div className='flex  justify-center md:justify-normal'>
                <button
                    onClick={() => handleActive(0)}
                    className={`w-[130px]  md:w-[150px] h-[40px] ${active === 0 ? ' bg-[#ffffff] text-[#000000]' : ' bg-[#06AEFF] text-[#FFFF]'} text-[18px] mt-[10px]`}
                >
                    Đầu tư
                </button>
                <button
                    onClick={() => handleActive(1)}
                    className={`w-[130px] md:w-[150px] h-[40px] ${active === 1 ? ' bg-[#ffffff] text-[#000000]' : ' bg-[#06AEFF] text-[#FFFF]'} text-[18px] mt-[10px] ml-2`}
                >
                    Chung cư
                </button>
            </div>
            {active === 0 ? <Invest active={active} /> : <div></div>}
        </DivStyled>
    )
}


const DivStyled = styled.div`
    @media screen and (min-width: 2560px) {
        width: auto !important;
    }
`