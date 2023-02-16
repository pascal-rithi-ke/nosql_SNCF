import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"
import * as React from "react"
import { NavBar } from "../components/Navbar"
import getFoundObject from "../domain/usecase/FoundObject/getFoundObject"

export const Home = () => {
  const [page, setPage] = React.useState(0)
  const {data : FoundObjects} = getFoundObject(page)
  console.log(FoundObjects)

  return (
    <>
    <NavBar />
    <h1>Object trouvé</h1>
    {FoundObjects?.map((element => (
     <Card sx={{ maxWidth: 345 }} key={element.foundObjectId}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.etsystatic.com/isla/96710f/40865805/isla_fullxfull.40865805_9lzetemc.jpg?version=0"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {element.nature}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Gare : {element.gareName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Object trouvé le : {element.date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Restitué le : {element.restitution}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )))}
    <div style={{
      display: "flex"
    }}>
      <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => setPage((prev) => prev > 0 ? prev - 1 : prev)}>prev -</button>
      <p>{page}</p>
      <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => setPage((prev) => prev + 1)}>next +</button>
    </div>
    </>
  )
}