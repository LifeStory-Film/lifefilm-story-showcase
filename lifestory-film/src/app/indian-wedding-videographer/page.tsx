import { redirect } from 'next/navigation'

export function generateMetadata() {
  return {
    title: 'Indian Wedding Videographer LA | LifeStory.Film',
  }
}

export default function IndianWeddingVideographer() {
  redirect('/south-asian-wedding-videographer')
}
