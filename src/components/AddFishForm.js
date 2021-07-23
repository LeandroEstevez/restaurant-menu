import React from "react";

export class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (e) => {
    e.preventDefault();

    const fish = {
      name = this.nameRef.value.value,
      price = parseFloat(this.priceRef.value.value),
      status = this.statusRef.value.value,
      desc = this.descRef.value.value,
      image = this.imageRef.value.value,
    }

    this.props.addFish(fish);

    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.name} type="text" placeholder="Name" />
        <input name="price" ref={this.price} type="text" placeholder="Price" />
        <select
          name="status"
          ref={this.status}
          type="text"
          placeholder="Status"
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.desc} type="text" placeholder="Desc" />
        <input name="image" ref={this.image} type="text" placeholder="Image" />
        <button type="submit">Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
