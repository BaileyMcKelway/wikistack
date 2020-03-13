const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div>
    <label for="author_name" class="col-sm-2 control-label">Name</label>
    <div>
    <input id="author_name" name="author_name" type="text" class="form-control"/>
    </div>
    </div>
    
    <div>
    <label for="author_email" class="col-sm-2 control-label">Email</label>
    <div>
    <input id="author_email" name="author_email" type="text" class="form-control"/>
    </div>
    </div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <label for="content" class="col-sm-2 control-label">Content</label>
    <div>
    <input id="content" name="content" type="text" class="form-control"/>
    </div>
    
    <div class="form-group">
      <label for="status" class="col-sm-2 control-label">Status</label>
      <div class="col-sm-10">
        <select name="status">
          <option>open</option>
          <option>closed</option>
        </select>
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);