interface ComponentProps {
  onSelectItem: (item: number) => void
}

function renderSelector(props: ComponentProps) {

}

let selectedId = 0

function handleSelectItem(item: any) {
  selectedId = item.id
}

console.log(renderSelector({onSelectItem: handleSelectItem}))
