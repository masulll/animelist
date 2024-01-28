import prisma from "@/libs/prisma";

export async function POST(request) {
  // get the data from user client
  const { mal_id, user_email, anime_img, anime_title } = await request.json();
  const data = { mal_id, user_email, anime_img, anime_title };

  const createCollection = await prisma.collection.create({ data });
  if (!createCollection)
    return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
export async function DELETE(request) {
  // get the data from user client

  const { id } = await request.json();
  const data = { id };

  const createCollection = await prisma.collection.delete({
    where: {
      id: data.id,
    },
  });
  if (!createCollection)
    return Response.json({ status: 500, isCreated: false });
  else return console.error("error deleting", error);
}
