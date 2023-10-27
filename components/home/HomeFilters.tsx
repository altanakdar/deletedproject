"use client"
import { Button } from '../ui/button'
import { HomePageFilters } from '@/constants/filters'

const HomeFilters = () => {

    const active ='frequent';
  return (
    <div className='mt-10 flex-wrap gap-3 md:flex hidden'>
        {HomePageFilters.map((item) => (
            <Button key={item.value} onClick={() => {}}
            className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${active === item.value ? 'bg-primary-100 text-primary-500'  : 'bg-light-800 text-light-500  dark:bg-dark-300 dark:text-light'}`}
            >
            {item.name}
            </Button>
        ))}
    </div>
  )
}

export default HomeFilters