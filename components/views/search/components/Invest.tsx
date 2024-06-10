import Select from 'antd/lib/select';
import Space from 'antd/lib/space';
import styled from 'styled-components';
import IconSelect from '@/icons/IconSelect';
import Input from 'antd/lib/input';
import IconSearchInput from '@/icons/IconSearchInput';

type Props = {
    [key: string]: any
}
export default function Invest(props: Props) {
    const {
        active
    } = props || {};

    return (
        <div className={` p-[15px] mx-auto  bg-white relative flex flex-col justify-center shadow-[4px_4px_4px_rgba(0,0,0,0.15)] 
        min-[425px]:!right-[15px]  
        max-[360px]:!right-[0px]  
        max-[320px]:!w-[290px]  
        lg:w-[800px] 
        md:h-[140px] md:mx-auto md:w-[690px]
        xl:w-[1000px] xl:right-[25px]
        lg:right-[110px]
        !min-[2560px]:!left-[250px]
        `}>
            <div className='flex flex-col md:flex-row justify-evenly'>
                <Input
                    styles={{ affixWrapper: { borderRadius: '0px' } }}
                    className='max-[320px]:!w-[260px] w-[300px] md:w-[500px] lg:w-[605px] xl:w-[774px] h-[40px] border-[1px] border-[#DCE0E0] rounded-0'
                    placeholder='Nhập thông tin tìm kiếm'
                    prefix={<div className='w-[18px] h-[18px]'><IconSearchInput /></div>}
                />
                <button className='hidden md:block w-[150px] h-[40px] bg-[#06AEFF] font-[500] text-[16px] text-[#ffff] '>
                    Tìm kiếm
                </button>
            </div>
            <div className='flex flex-col md:flex-row justify-evenly mt-[15px]'>
                <SelectStyled
                    dropdownStyle={{ zIndex: 1000000, borderRadius: '0px' }}
                    style={{ height: '40px', textAlign: 'start' }}
                    className='max-[320px]:!w-[260px] w-[300px]  md:w-[216px] lg:w-[250px] xl:w-[300px]'
                    placeholder="Khu vực"
                    suffixIcon={<IconSelect />}
                    dropdownRender={(menu) => (
                        <>
                            <Input
                                styles={{ affixWrapper: { borderRadius: '0px' } }}
                                className='w-full h-[40px] border-[1px] border-[#DCE0E0] rounded-0'
                                placeholder='Nhập thông tin tìm kiếm'
                                prefix={<></>}
                            />
                            {menu}

                        </>
                    )}
                // options={items.map((item) => ({ label: item, value: item }))}
                />
                <SelectStyled
                    className='mt-[15px] md:mt-0 !w-[300px] xl:!w-[300px]  md:!w-[216px] lg:!w-[250px] max-[320px]:!w-[260px]'
                    dropdownStyle={{ zIndex: 1000000, borderRadius: '0px' }}
                    style={{ height: '40px', textAlign: 'start' }}
                    placeholder="Mức giá"
                    suffixIcon={<IconSelect />}
                    dropdownRender={(menu) => (
                        <>
                            <Input
                                styles={{ affixWrapper: { borderRadius: '0px' } }}
                                className='w-full h-[40px] border-[1px] border-[#DCE0E0] rounded-0'
                                placeholder='Nhập thông tin tìm kiếm'
                                prefix={<></>}
                            />
                            {menu}

                        </>
                    )}
                // options={items.map((item) => ({ label: item, value: item }))}
                />
                <SelectStyled
                    className='mt-[15px] md:mt-0 w-[300px]  md:w-[216px] xl:!w-[300px] lg:w-[250px] max-[320px]:!w-[260px]'
                    dropdownStyle={{ zIndex: 1000000, borderRadius: '0px' }}
                    style={{ height: '40px', textAlign: 'start' }}
                    placeholder="Trạng thái"
                    suffixIcon={<IconSelect />}
                    dropdownRender={(menu) => (
                        <>
                            <Input
                                styles={{ affixWrapper: { borderRadius: '0px' } }}
                                className='w-full h-[40px] border-[1px] border-[#DCE0E0] rounded-0'
                                placeholder='Nhập thông tin tìm kiếm'
                                prefix={<></>}
                            />
                            {menu}

                        </>
                    )}
                // options={items.map((item) => ({ label: item, value: item }))}
                />
            </div>
            <button className='block md:hidden w-[300px] mt-[15px] h-[40px] bg-[#06AEFF] font-[500] text-[16px] text-[#ffff] max-[320px]:!w-[260px]'>
                Tìm kiếm
            </button>
        </div>
    )
}



const SelectStyled = styled(Select)`
    .ant-select-selector {
        border-radius: 0px !important;
    }
    .ant-select-selection-placeholder{
        text-align: start !important;
    }
`
const DivStyled = styled.div`
    @media screen and (min-width: 2560px) {
        left: 260px !important;
    }
`