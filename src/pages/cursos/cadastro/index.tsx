import "./styles.css";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import { Link } from "react-router-dom";

const CourseRegistration = () => {
  return (
    <div className="flex-column-gap20">
      <h1>Cadastrar curso</h1>
      <form className="form-registration flex-column-gap20">
        <div className="flex-column-gap20">
          <Input label="Nome" type="text" />
        </div>
        <div className="form-actions-registration flex-column-gap20">
          <Input type="reset" variant="bgNeutral" value="Limpar" />
          <Link to="/cursos">
            <Button type="cancel" label="Cancelar" />
          </Link>
          <Input type="submit" variant="bgSuccess" value="Cancelar" />
        </div>
      </form>
    </div>
  );
};

export { CourseRegistration };
