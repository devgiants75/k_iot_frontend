import React from 'react'

//! 고객 주문 카드 컴포넌트 (OrderCard)

type OrderCardProps = {
  customerName?: string
  totalPrice: number
  isPaid: boolean
}

function OrderCard({ customerName, totalPrice, isPaid }: OrderCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '240px' }}>
      {/* 고객 이름이 없을 때 비회원 처리 */}
      <p>주문자: {customerName ? customerName : '비회원 고객'}</p>

      {/* totalPrice가 0이 아닐 때만 표시 (단락 평가) */}
      {totalPrice > 0 && <p>총액: {totalPrice.toLocaleString()}원</p>}

      {/* 결제 상태: 삼항 연산자 */}
      <p>상태: {isPaid ? '결제 완료' : '결제 대기중'}</p>
    </div>
  )
}

function Example03_Answer() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <OrderCard customerName="이승아" totalPrice={18000} isPaid={true} />
      <OrderCard totalPrice={0} isPaid={false} />
    </div>
  )
}

export default Example03_Answer

