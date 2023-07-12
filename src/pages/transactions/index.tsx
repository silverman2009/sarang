import Menu from '@/components/common/Menu'
import ProfileInfo from '@/components/common/ProfileInfo'
import CardTransaction from '@/components/transactions/CardTransaction'
import useGetMyTransactions from '@/hooks/query/user/transactions/useGetMyTransactions'
import React from 'react'

const Transactions = () => {
  const { data, isLoading } = useGetMyTransactions()
  return (
    <div>
      <ProfileInfo />
      {
        isLoading ? <p className="text-center font-artin-regular mt-10">در حال  گرفتن اطلاعات ...</p>
          :
          <div className="flex flex-col gap-5 mt-10 mb-28 ">
            {
              data?.map((transaction, index) => (
                <CardTransaction transaction={transaction} key={index} />
              ))
            }

          </div>

      }

      <Menu />
    </div>
  )
}

export default Transactions