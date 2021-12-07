export interface AddProductToWishlistProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishlist({
  onAddToWishList,
  onRequestClose,
}: AddProductToWishlistProps) {
  return (
    <>
      <span>Do you wish add to favorites?</span>
      <button onClick={onAddToWishList}>Yes</button>
      <button onClick={onRequestClose}>No</button>
    </>
  );
}
