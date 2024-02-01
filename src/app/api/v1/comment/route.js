import prisma from "@/libs/prisma";

export async function POST(request) {
  // get the data from user client
  const { mal_id, user_email, comment, username, anime_title } =
    await request.json();
  const data = { mal_id, user_email, comment, username, anime_title };

  const createComment = await prisma.comment.create({ data });
  if (!createComment) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
// export async function DELETE(request) {
//   // get the data from user client

//   const { id } = await request.json();
//   const data = { id };

//   const deleteCollection = await prisma.collection.delete({
//     where: {
//       id: data.id,
//     },
//   });
//   if (!deleteCollection)
//     return Response.json(
//       { status: 500, isDeletedted: false },
//       {
//         headers: { "Content-Type": "application/json" },
//         status: 500,
//       }
//     );
//   else
//     return Response.json(
//       { status: 200, isDeleted: true },
//       {
//         headers: { "Content-Type": "application/json" },
//         status: 200,
//       }
//     );
// }
