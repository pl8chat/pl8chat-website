'use client'
import { useState } from 'react'

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming'
]

type StateInputProps = {
  onSelect: (state: string) => void
}

export default function StateInput({ onSelect }: StateInputProps) {
  const [query, setQuery] = useState('')
  const [filteredStates, setFilteredStates] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    if (value.length > 0) {
      const results = states.filter(state =>
        state.toLowerCase().startsWith(value.toLowerCase())
      )
      setFilteredStates(results.slice(0, 5))
    } else {
      setFilteredStates([])
    }
  }

  const handleSelect = (state: string) => {
    setQuery(state)
    setFilteredStates([])
    onSelect(state) // send selected value to parent
  }

  return (
    <div className="relative md:w-36">
      <input
        value={query}
        onChange={handleChange}
        className="w-[112px] text-[#E5E7EB] text-xs md:text-base focus:ring-0 font-normal leading-relaxed border-none bg-transparent placeholder:text-[#E5E7EB]"
        type="text"
        placeholder="State"
        maxLength={20}
      />

      {filteredStates.length > 0 && (
        <ul className="absolute w-full left-0 right-0 mt-1 bg-[#6C6C6C] border-none rounded-[6px] text-white text-xs z-10">
          {filteredStates.map((state) => (
            <li
              key={state}
              onClick={() => handleSelect(state)}
              className="px-3 py-1 cursor-pointer hover:bg-[#C4C4C4] rounded-[6px]"
            >
              {state}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
