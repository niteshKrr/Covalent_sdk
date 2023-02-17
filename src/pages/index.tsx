import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import All_transection_for_address from '@/components/All_transection_for_address'
import ERC20_transfer_for_address from '@/components/ERC20_transfer_for_address'


export default function Home() {
  return (
    <>
    <div>
      Hello world
    </div>
    <div>
      <All_transection_for_address/>
    </div>
    <div>
      <ERC20_transfer_for_address/>
    </div>
    </>
  )
}
