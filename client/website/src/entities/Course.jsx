class Course {
  constructor(data) {
    this._id = data._id;
    this.title = data.title;
    this.description = data.description;
    this.image = data.image;
  }
}

export default Course;
