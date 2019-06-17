export interface Validator {
    name: string;
    validator: any;
    message: string;
  }
  export interface FieldConfig {
    label?: string;
    name?: string;
    inputType?: string;
    options?: string[];
    collections?: any;
    type: string;
    value?: any;
    validations?: Validator[];
  }

  export interface ControlConfig{
    ControlDinamico:{
        NombreControl?:string;
        EtiquetaPresentacion:string;
        id_GrupoAtributoFlujo:number;
        id_AtributoFlujoTipo:number;
        EsAtributoEspecial:number;
        id_AtributoFlujo:number;
        EsObligatorio:boolean;
        Actualiza:number;
        Valor?:any;
        Repertorio?:any;
        Editable:boolean;
        Grupo:number;
        Posicion:number;
        Ancho:string;
        IDUnicoAtributo:string;
        validations?: Validator[];
    }

    


  }

  /* export interface FormConfig{
    IncidenteFlujo: {
      id_Proceso?:number;
      id_Flujo?:number;
      id_IncidenteFlujo?:number;
      id_VeredictoFlujo?:number;
      id_PasoFlujo?:number;
      id_TareaFlujo?:number;
      id_Sistema?:number;
      id_Perfil?:number;
      id_UsuarioPerfil?:number;
      id_Universo?:number;
    },
    DatosNegocio: {
      id_edo:string;
      ct_tipo:string;
      ct_num:string;
      id_SostPlantilla:number;
      id_edo_r:string;
      ct_tipo_r:string;
      ct_num_r:string;
      id_Turno:string;
      id_Funcion:number;
      id_Plantilleo:number;
    }
  } */