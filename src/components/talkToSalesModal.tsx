'use client'
import Modal from './modal'
import TalkToSales from './talkToSales'
import { useModal } from '@/components/modalContext'

export default function TalkToSalesModal() {
  const { isOpen } = useModal()
  console.log('MODAL OPEN STATE:', isOpen) // ✅ Check if this logs true when clicking the button

  return <Modal component={<TalkToSales />} />
}
