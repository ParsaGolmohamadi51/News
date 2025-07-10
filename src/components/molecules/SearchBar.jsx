'use client'
import React from 'react'
import InputSearch from '@/components/atoms/InputSearch'
import Button from '@/components/atoms/Button'

export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="flex flex-row-reverse items-center text-[10px] sm:text-xl rounded-xl overflow-hidden cursor-pointer w-full">
      <Button onClick={onSearch} className="text-[10px] sm:text-xl">جستجو</Button>
      <InputSearch
        value={value}
        onChange={onChange}
        placeholder="دنبال چه چیزی هستید؟"
      />
    </div>
  )
}
