const mapItemsById = items => {
  const allIds = []
  const byId = items.reduce((itemsById, item) => {
    const { id } = item
    allIds.push(id)

    return {
      ...itemsById,
      [id]: item
    }
  }, {})

  return { allIds, byId }
}

export default mapItemsById;
