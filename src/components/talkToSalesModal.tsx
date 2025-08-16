'use client'
import Modal from './modal'
import TalkToSales from './talkToSales'
import { useModal } from '@/components/modalContext'

export default function TalkToSalesModal() {
  const { isOpen } = useModal()

  return <Modal component={<TalkToSales />} />
}
