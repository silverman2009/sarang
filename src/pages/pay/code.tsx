import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import ProfileInfo from '@/components/common/ProfileInfo'
import InformationPayWithCode from '@/components/pay/InformationPayWithCode'
import { initialValuesPayWithCode } from '@/helpers/utils/initialValues'
import { toEnglishNumber, toFarsiNumber } from '@/helpers/utils/toFarsiNumber'
import { validationSchemaPayWitCode } from '@/helpers/utils/validation/pay'
import useGetDriverByCityNumberQuery from '@/hooks/query/drivers/useGetDriverByCityNumberQuery'
import useDriverStore from '@/stores/driver-store'
import { useFormik } from 'formik'
import React from 'react'

const Code = () => {
    const { setCode } = useDriverStore()
    const { refetch, isLoading } = useGetDriverByCityNumberQuery()
    const formik = useFormik({
        initialValues: initialValuesPayWithCode,
        validationSchema: validationSchemaPayWitCode,
        onSubmit: async (values) => {
            await setCode(toEnglishNumber(values.code))
            refetch()
        }
    })
    return (
        <div className='h-screen flex flex-col justify-between bg-white'>
            <div>
                <ProfileInfo />
                <div className='layout mt-10'>
                    <InformationPayWithCode />
                    <Input classInputTag='text-center' label='کد راننده' formik={formik} name='code' />
                </div>
            </div>
            <div className='layout mb-10'>
                <Button isLoading={isLoading} classBtn='bg-[#464646] !text-white' name='استعلام' onClick={formik.handleSubmit} />
            </div>
        </div>
    )
}

export default Code