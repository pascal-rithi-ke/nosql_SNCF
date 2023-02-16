import getFoundObject from "../domain/usecase/FoundObject/getFoundObject"

export const Home = () => {
  const data = getFoundObject()
  console.log(data.data)
  
  return (
    <>
    coucou home page
    </>
  )
}