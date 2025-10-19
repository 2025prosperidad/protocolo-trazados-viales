// PlantUML Renderer - Solución Simple y Funcional

// Código PlantUML embebido directamente
const diagramCodes = {
  'diagram-flujo-general': `@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo General del Módulo de Trazados Viales

actor "Ciudadano" as Ciudadano
actor "Ventanilla (Analista)" as Ventanilla
participant "Herramienta" as Herramienta
participant "Motor de Asignación" as Motor
participant "Grupo de Fase" as GrupoFase
actor "Supervisor" as Supervisor
actor "Técnico" as Tecnico
actor "Derivación" as Derivacion
database "Expediente Digital" as BD

== REGISTRO DE TRÁMITE ==
Ciudadano -> Ventanilla : Entrega información y documentación
Ventanilla -> Ventanilla : Analista revisa y valida requisitos
Ventanilla -> Herramienta : Registrar Trámite
Herramienta -> Ventanilla : Confirmar creación del trámite

== ASIGNACIÓN AUTOMÁTICA ==
Herramienta -> Motor : Solicitar asignación de responsable por fase
Motor -> GrupoFase : Solicitar siguiente técnico en rotación
GrupoFase -> Motor : Devolver técnico seleccionado
Motor -> Herramienta : Asignar trámite al técnico

== NOTIFICACIONES ==
Herramienta -> Supervisor : Notificar asignación
Herramienta -> Tecnico : Enviar notificación
Herramienta -> Ciudadano : Enviar confirmación
Herramienta -> BD : Registrar evento de asignación

== GESTIÓN DE FASES ==
loop Por cada fase del trámite
  Tecnico -> Herramienta : Trabajar en la fase actual
  Herramienta -> Supervisor : Actualizar seguimiento
  
  alt Solicitud de información
    Tecnico -> Herramienta : Solicitar información al ciudadano
    Herramienta -> Ciudadano : Notificar solicitud
    Ciudadano -> Ventanilla : Entregar información
    Ventanilla -> Herramienta : Registrar información recibida
    Herramienta -> Tecnico : Notificar recepción
  else Derivación
    Tecnico -> Herramienta : Solicitar derivación
    Herramienta -> Derivacion : Enviar trámite a derivación
    Derivacion -> Derivacion : Procesar trámite
    Derivacion -> Herramienta : Devolver trámite procesado
    Herramienta -> Tecnico : Notificar continuación
  end
  
  Tecnico -> Herramienta : Finalizar fase y cargar entregables
  Herramienta -> BD : Registrar finalización de fase
  Herramienta -> Motor : Asignar siguiente fase
  Motor -> Herramienta : Confirmar nueva asignación
  Herramienta -> Tecnico : Notificar nueva fase
  Herramienta -> Supervisor : Actualizar seguimiento
end

== CIERRE DEL TRÁMITE ==
Herramienta -> BD : Guardar resolución final
Herramienta -> Ciudadano : Notificar cierre
Herramienta -> Tecnico : Notificar a todos los técnicos participantes
Herramienta -> Supervisor : Informe final del trámite

@enduml`,
  'diagram-flujo-ingreso': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo de Ingreso de Información y Registro de Trámite

actor "Ciudadano" as Ciudadano
actor "Ventanilla (Analista)" as Ventanilla
participant "Herramienta" as Herramienta
participant "Motor de Asignación" as Motor
participant "Grupo de Fase" as GrupoFase
actor "Supervisor" as Supervisor
actor "Técnico" as Tecnico
database "Expediente Digital" as BD

== INICIO: RECEPCIÓN DE SOLICITUD ==
Ciudadano -> Ventanilla : Entrega información y documentación requerida
Ventanilla -> Ventanilla : Analista revisa y valida requisitos

== REGISTRO EN EL SISTEMA ==
Ventanilla -> Herramienta : Registrar Trámite
Herramienta -> Ventanilla : Mostrar confirmación de creación
Herramienta -> BD : Crear expediente digital

== ASIGNACIÓN AUTOMÁTICA DE RESPONSABLE ==
Herramienta -> Motor : Solicitar asignación de responsable por fase
Motor -> GrupoFase : Solicitar siguiente técnico en rotación según perfil
GrupoFase -> Motor : Devolver técnico seleccionado
Motor -> Herramienta : Asignar trámite al técnico

== NOTIFICACIONES Y ACTIVACIÓN ==
Herramienta -> BD : Registrar evento de asignación
Herramienta -> Supervisor : Notificar asignación (vista en panel)
Herramienta -> Tecnico : Enviar notificación (correo + WhatsApp)
Herramienta -> Ciudadano : Enviar confirmación (correo + WhatsApp)
Tecnico -> Herramienta : Acceder al expediente y comenzar gestión

@enduml`,
  'diagram-flujo-fases': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo de Revisión de Fases de Trámite

participant "Herramienta" as Herramienta
participant "Motor de Asignación" as Motor
participant "Grupo de Fase" as GrupoFase
actor "Supervisor" as Supervisor
actor "Técnico" as Tecnico
actor "Ciudadano" as Ciudadano
database "Expediente Digital" as BD

== CICLO DE GESTIÓN DE FASES ==

loop Por cada fase del trámite
  
  == INICIO DE FASE ==
  Tecnico -> Herramienta : Acceder a la fase asignada
  Herramienta -> Tecnico : Mostrar información del trámite
  Tecnico -> Herramienta : Iniciar trabajo de la fase asignada
  Herramienta -> Supervisor : Actualizar seguimiento del trámite
  
  == GESTIÓN DE LA FASE ==
  Tecnico -> Tecnico : Realizar análisis técnico
  
  == FINALIZACIÓN DE FASE ==
  Tecnico -> Herramienta : Finalizar fase y cargar entregables
  Herramienta -> Supervisor : Actualizar seguimiento de la fase
  Herramienta -> BD : Registrar finalización de fase
  
  == TRANSICIÓN A SIGUIENTE FASE ==
  Herramienta -> Motor : Evaluar y asignar siguiente fase automáticamente
  Motor -> GrupoFase : Seleccionar grupo/miembro disponible para siguiente fase
  GrupoFase -> Motor : Devolver técnico seleccionado
  Motor -> Herramienta : Confirmar nueva asignación
  
  == NOTIFICACIONES DE AVANCE ==
  Herramienta -> Tecnico : Notificar nueva fase asignada
  Herramienta -> Ciudadano : Notificar avance del trámite
  Herramienta -> Supervisor : Actualizar seguimiento con nueva fase
  
end

@enduml`,
  'diagram-flujo-derivacion': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo de Derivación de Trámites

participant "Herramienta" as Herramienta
actor "Técnico" as Tecnico
actor "Derivación" as Derivacion
actor "Supervisor" as Supervisor
actor "Ciudadano" as Ciudadano
database "Expediente Digital" as BD

== INICIO: DETECCIÓN DE NECESIDAD DE DERIVACIÓN ==

Tecnico -> Tecnico : Analizar trámite en fase actual
Tecnico -> Herramienta : Solicitar derivación

== CAMBIO DE ESTADO Y NOTIFICACIONES ==

Herramienta -> BD : Cambiar estado del trámite a "En Derivación"
Herramienta -> Derivacion : Enviar trámite a derivación
Herramienta -> Supervisor : Notificar derivación del trámite
Herramienta -> Ciudadano : Notificar pausa temporal del trámite

== GESTIÓN EN DERIVACIÓN ==

Derivacion -> Derivacion : Procesar y gestionar el trámite derivado

== RESPUESTA Y REACTIVACIÓN ==

Derivacion -> Herramienta : Responder y devolver trámite procesado
Herramienta -> BD : Cambiar estado a "En Proceso"
Herramienta -> Tecnico : Notificar continuación después de derivación
Herramienta -> Supervisor : Actualizar seguimiento post-derivación
Herramienta -> Ciudadano : Notificar reactivación del trámite
Tecnico -> Herramienta : Continuar con la gestión de la fase

@enduml`,
  'diagram-flujo-solicitud': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo de Solicitud de Información al Usuario

participant "Herramienta" as Herramienta
actor "Técnico" as Tecnico
actor "Ventanilla (Analista)" as Ventanilla
actor "Ciudadano" as Ciudadano
actor "Supervisor" as Supervisor
database "Expediente Digital" as BD

== INICIO: DETECCIÓN DE INFORMACIÓN FALTANTE ==

Tecnico -> Tecnico : Revisar documentación en fase actual
Tecnico -> Herramienta : Solicitar información o documentación al ciudadano

== CAMBIO DE ESTADO Y NOTIFICACIÓN ==

Herramienta -> BD : Cambiar estado del trámite a "Solicitud de Información"
Herramienta -> Ciudadano : Notificar solicitud de información
Herramienta -> Supervisor : Notificar pausa del trámite

== RESPUESTA DEL CIUDADANO ==

Ciudadano -> Ventanilla : Entregar información solicitada
Ventanilla -> Ventanilla : Verificar documentación recibida

== REGISTRO Y REACTIVACIÓN ==

Ventanilla -> Herramienta : Registrar información recibida
Herramienta -> BD : Actualizar expediente y cambiar estado a "En Proceso"
Herramienta -> Tecnico : Notificar recepción de información
Herramienta -> Supervisor : Actualizar seguimiento
Herramienta -> Ciudadano : Confirmar recepción y reactivación

== CONTINUACIÓN DEL PROCESO ==

Tecnico -> Herramienta : Continuar con la gestión de la fase
Tecnico -> Tecnico : Completar análisis técnico

@enduml`,
  'diagram-trazado-vial': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Trazado Vial
subtitle Duración total estimada: 162 días

start

group REGISTRO DE TRÁMITE Y ASIGNACIÓN
  :Ciudadano entrega solicitud y requisitos;
  :Ventanilla registra trámite;
  :Herramienta asigna fase de competencia;
end group

group FASE 1: COMPETENCIA (8 días)
  partition "Técnico Geógrafo\n(Katy, Alicia, Fernanda)" as TecGeo {
    :Verificar competencia;
    if (Es competente?) then (Sí)
      :Revisar requisitos completos;
      if (Requisitos completos?) then (Sí)
        :Elaborar mapa de competencia;
        :Guardar mapa en BD;
      else (No)
        :Solicitar información al ciudadano;
        :Ventanilla registra información;
      end if
    else (No)
      :Elaborar informe de no competencia;
      :Supervisor revisa informe;
      :Aprobar y finalizar en BD;
      :Notificar no competencia al ciudadano;
    end if
  }
end group

group FASE 2: INFORME DE PERTINENCIA (25 días)
  partition "Técnico Arquitecto\n(Irene, Carla, Nicole, Santiago, Evelyn, Marcelo)" as TecArq {
    :Asignar fase de pertinencia;
    :Analizar pertinencia;
    if (Requiere información?) then (Sí)
      :Solicitar información a terceros;
      :Recibir información;
    end if
    if (Es pertinente?) then (Sí)
      :Elaborar informe de pertinencia;
      :Elaborar mapa de pertinencia;
      :Supervisor revisa documentos;
      :Aprobar fase en BD;
    else (No)
      :Elaborar informe de no pertinencia;
      :Supervisor revisa y aprueba;
      :Finalizar trámite en BD;
      :Notificar resultado al ciudadano;
    end if
  }
end group

group FASE 3: TOPOGRAFÍA (67 días)
  partition "Técnico Topógrafo\n(Edison, Jairo)" as TecTopo {
    :Asignar fase de topografía;
    :Revisar información;
    if (Cuenta con topografía?) then (Sí)
      :Validar topografía;
    else (No)
      :Inspección de la vía;
      :Posicionamiento puntos GPS;
      :Levantamiento topográfico;
    end if
    :Elaborar informe topográfico y dibujo;
    :Supervisor revisa informe;
    :Aprobar fase en BD;
  }
end group

group FASE 4: DISEÑO GEOMÉTRICO (30 días)
  partition "Técnico Ing. Civil\n(Cristian, Romario, Cristina)" as TecCivil {
    :Asignar fase de diseño;
    :Elaborar diseño geométrico;
    :Elaborar informe y planos;
    :Supervisor revisa diseño;
    :Aprobar fase en BD;
  }
end group

group FASE 5: INFORME DE TRAZADO VIAL (7 días)
  partition "Técnico Ing. Civil\n(Cristian, Romario, Cristina)" as TecCivil {
    :Elaborar informe de trazado vial;
    :Cargar informe;
    :Supervisor revisa informe;
    :Aprobar fase en BD;
  }
end group

group FASE 6: RESOLUCIONES Y OFICIOS (25 días)
  partition "Técnico Ing. Civil\n(Cristian, Romario, Cristina)" as TecCivil {
    :Elaborar resolución;
    :Revisión técnica previa (Supervisor);
    :Revisión coordinación (Supervisor);
    :Revisión y firma director (Supervisor);
    :Guardar resolución final en BD;
    :Enviar resolución al ciudadano;
    :Notificar cierre al Técnico Ing. Civil;
    :Informe final al Supervisor;
  }
end group

stop

@enduml`,
  'diagram-certificacion-vial': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Certificación Vial
subtitle Duración total estimada: 24 días

start

group REGISTRO DE TRÁMITE Y ASIGNACIÓN
  :Ciudadano entrega solicitud y requisitos;
  :Ventanilla registra trámite;
  :Herramienta asigna fase de competencia;
end group

group FASE 1: COMPETENCIA (4 días)
  partition "Técnico Ing. Civil\n(Cristian, Romario, Cristina)" as TecCivil {
    :Verificar competencia;
    if (Es competente?) then (Sí)
      :Revisar requisitos completos;
      if (Requisitos completos?) then (Sí)
        :Continuar a siguiente fase;
      else (No)
        :Solicitar información al ciudadano;
        :Ventanilla registra información;
      end if
    else (No)
      :Elaborar respuesta de no competencia;
      :Supervisor revisa respuesta;
      :Revisar y firmar director (Supervisor);
      :Guardar respuesta en BD;
      :Notificar no competencia al ciudadano;
    end if
  }
end group

group FASE 2: VERIFICACIÓN DE APROBACIÓN (5 días)
  partition "Técnico Geógrafo\n(Katty, Marcelo)" as TecGeo {
    :Asignar fase de verificación;
    :Analizar y verificar pertinencia;
    :Verificar aprobaciones de vías;
    if (Requiere información adicional?) then (Sí)
      :Solicitar información al ciudadano;
      :Ventanilla registra información;
      :Revisar oficio (Supervisor);
      :Revisar y firmar director (Supervisor);
    end if
    :Completar verificación;
    :Guardar verificación en BD;
  }
end group

group FASE 3: INFORME DE CERTIFICACIÓN (15 días)
  partition "Técnico Geógrafo\n(Katty, Marcelo)" as TecGeo {
    :Elaborar informe de certificación vial;
    :Supervisor revisa informe;
    :Revisar coordinación (Supervisor);
    :Revisar y firmar director (Supervisor);
    :Guardar certificación final en BD;
    :Enviar certificación vial al ciudadano;
    :Notificar cierre al Técnico Geógrafo;
    :Informe final al Supervisor;
  }
end group

stop

@enduml`,
  'diagram-replanteo-vial': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Replanteo Vial
subtitle Duración total estimada: 30 días

start

group REGISTRO DE TRÁMITE Y ASIGNACIÓN
  :Ciudadano entrega solicitud y requisitos;
  :Ventanilla registra trámite;
  :Herramienta asigna fase de competencia;
end group

group FASE 1: COMPETENCIA (4 días)
  partition "Técnico Arquitecto\n(Arquitectos + Geógrafo)" as TecArq {
    :Verificar competencia;
    if (Es competente?) then (Sí)
      :Revisar requisitos completos;
      if (Requisitos completos?) then (Sí)
        :Continuar a siguiente fase;
      else (No)
        :Solicitar información al ciudadano;
        :Ventanilla registra información;
      end if
    else (No)
      :Elaborar respuesta de no competencia;
      :Supervisor revisa respuesta;
      :Revisar y firmar director (Supervisor);
      :Guardar respuesta en BD;
      :Notificar no competencia al ciudadano;
    end if
  }
end group

group FASE 2: VERIFICACIÓN DE APROBACIÓN (6 días)
  partition "Técnico Arquitecto\n(Irene, Carla, Nicole, Santiago, Evelyn, Marcelo)" as TecArq {
    :Asignar fase de verificación;
    :Verificar información;
    if (Existen planos por digitalizar?) then (Sí)
      :Digitalización de planos escaneados;
    end if
    :Analizar y verificar pertinencia;
    :Verificar vías aprobadas;
    if (Requiere inspección?) then (Sí)
      :Inspección en territorio;
    end if
    :Guardar verificación en BD;
  }
end group

group FASE 3: INFORME DE REPLANTEO (17 días)
  partition "Técnico Geógrafo\n(Irene, Carla, Nicole, Santiago, Evelyn, Marcelo)" as TecGeo {
    :Asignar elaboración de informe;
    :Elaborar informe de replanteo vial;
    :Supervisor revisa informe;
    :Revisar coordinación (Supervisor);
    :Elaborar oficio para usuario;
    :Revisar y firmar director (Supervisor);
    :Guardar informe final en BD;
    :Enviar respuesta de replanteo vial al ciudadano;
    :Notificar cierre al Técnico Geógrafo;
    :Informe final al Supervisor;
  }
end group

stop

@enduml`,
  'diagram-secciones-transversales': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Secciones Transversales
subtitle Duración total estimada: 30 días

start

group REGISTRO DE TRÁMITE Y ASIGNACIÓN
  :Ciudadano entrega solicitud y requisitos;
  :Ventanilla registra trámite;
  :Herramienta asigna fase de competencia;
end group

group FASE 1: COMPETENCIA (8 días)
  partition "Técnico Geógrafo\n(Katty, Alicia, Fernanda, Marcelo)" as TecGeo {
    :Verificar competencia;
    if (Es competente?) then (Sí)
      :Revisar requisitos completos;
      if (Requisitos completos?) then (Sí)
        :Elaborar mapa de competencia;
        :Guardar mapa en BD;
      else (No)
        :Solicitar información al ciudadano;
        :Ventanilla registra información;
      end if
    else (No)
      :Elaborar informe de no competencia;
      :Supervisor revisa informe;
      :Revisar y firmar director (Supervisor);
      :Guardar respuesta en BD;
      :Notificar no competencia al ciudadano;
    end if
  }
end group

group FASE 2: VERIFICACIÓN DE APROBACIÓN (2 días)
  partition "Técnico Geógrafo\n(Katty, Alicia, Fernanda, Marcelo)" as TecGeo {
    :Asignar fase de verificación;
    :Verificar información de aprobaciones viales;
    :Guardar verificación en BD;
  }
end group

group FASE 3: INSPECCIÓN (2 días)
  partition "Técnico Geógrafo\n(Katty, Alicia, Fernanda, Marcelo)" as TecGeo {
    :Inspección en territorio;
    :Registrar inspección en BD;
  }
end group

group FASE 4: INFORME DE SECCIÓN (18 días)
  partition "Técnico Geógrafo\n(Katty, Alicia, Fernanda, Marcelo)" as TecGeo {
    :Elaborar informe de sección transversal;
    :Supervisor revisa informe;
    :Revisar coordinación (Supervisor);
    :Elaborar oficio de respuesta;
    :Revisar y firmar director (Supervisor);
    :Guardar informe final en BD;
    :Enviar informe de secciones transversales al ciudadano;
    :Notificar cierre al Técnico Geógrafo;
    :Informe final al Supervisor;
  }
end group

stop

@enduml`,
  'diagram-colocacion-eje': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Colocación de Eje Vial
subtitle Duración total estimada: 30 días

start

group REGISTRO DE TRÁMITE Y ASIGNACIÓN
  :Ciudadano entrega solicitud y requisitos;
  :Ventanilla registra trámite;
  :Herramienta asigna fase de competencia;
end group

group FASE 1: COMPETENCIA (3 días)
  partition "Técnico Arquitecto\n(Irene, Carla, Nicole, Santiago, Evelyn)" as TecArq {
    :Verificar competencia;
    if (Es competente?) then (Sí)
      :Revisar requisitos completos;
      if (Requisitos completos?) then (Sí)
        :Continuar a siguiente fase;
      else (No)
        :Solicitar información al ciudadano;
        :Ventanilla registra información;
      end if
    else (No)
      :Elaborar respuesta de no competencia;
      :Supervisor revisa respuesta;
      :Revisar y firmar director (Supervisor);
      :Guardar respuesta en BD;
      :Notificar no competencia al ciudadano;
    end if
  }
end group

group FASE 2: VERIFICACIÓN DE APROBACIÓN (4 días)
  partition "Técnico Arquitecto\n(Irene, Carla, Nicole, Santiago, Evelyn)" as TecArq {
    :Asignar fase de verificación;
    :Revisar aprobación de la vía;
    if (Información completa?) then (Sí)
      :Continuar a siguiente fase;
    else (No)
      :Solicitar información al ciudadano;
    end if
    :Guardar verificación en BD;
  }
end group

group FASE 3: DETERMINACIÓN COORDENADAS EJE (4 días)
  partition "Técnico Arquitecto\n(Irene, Carla, Nicole, Santiago, Evelyn)" as TecArq {
    :Elaborar informe previo de colocación;
    :Supervisor revisa informe previo;
    :Revisar coordinación (Supervisor);
    :Guardar informe previo en BD;
  }
end group

group FASE 4: TRABAJO EN TERRITORIO (7 días)
  partition "Técnico Topógrafo\n(Edison, Jairo)" as TecTopo {
    :Asignar colocación física;
    :Colocación del eje vial;
    :Registrar colocación en BD;
  }
end group

group FASE 5: INFORME DE COLOCACIÓN (12 días)
  partition "Técnico Topógrafo\n(Edison, Jairo)" as TecTopo {
    :Elaborar informe de colocación de eje vial;
    :Supervisor revisa informe;
    :Revisar coordinación (Supervisor);
    :Elaborar oficios de respuesta;
    :Revisar y firmar director (Supervisor);
    :Guardar informe final en BD;
    :Enviar oficio al usuario;
    :Notificar cierre al Técnico Topógrafo;
    :Informe final al Supervisor;
  }
end group

stop

@enduml`,
  'diagram-colocacion-infraestructura': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Colocación de Infraestructura
subtitle Duración total estimada: 35 días

start

group REGISTRO DE TRÁMITE Y ASIGNACIÓN
  :Ciudadano entrega solicitud y requisitos;
  :Ventanilla registra trámite;
  :Herramienta asigna fase de competencia;
end group

group FASE 1: COMPETENCIA (3 días)
  partition "Técnico Ing. Civil\n(Cristian, Romario, Cristina)\nIngeniero Geógrafo (Marcelo)" as TecCivilGeo {
    :Verificar competencia;
    if (Es competente?) then (Sí)
      :Revisar requisitos completos;
      if (Requisitos completos?) then (Sí)
        :Continuar a siguiente fase;
      else (No)
        :Solicitar información al ciudadano;
        :Ventanilla registra información;
      end if
    else (No)
      :Elaborar respuesta de no competencia;
      :Supervisor revisa respuesta;
      :Revisar y firmar director (Supervisor);
      :Guardar respuesta en BD;
      :Notificar no competencia al ciudadano;
    end if
  }
end group

group FASE 2: VERIFICACIÓN DE FRENTISTAS (20 días)
  partition "Técnico Ing. Civil\n(Cristian, Romario, Cristina, Marcelo)" as TecCivil {
    :Asignar fase de verificación;
    :Verificar información de frentistas;
    note right
      Se valida la existencia y conformidad 
      de los frentistas respecto a la 
      infraestructura solicitada
    end note
    :Guardar verificación en BD;
  }
end group

group FASE 3: INFORME DE AUTORIZACIÓN (12 días)
  partition "Técnico Ing. Civil\n(Cristian, Romario, Cristina)\nIngeniero Geógrafo (Marcelo)" as TecCivilGeo {
    :Asignar elaboración de informe;
    :Elaborar informe de colocación de infraestructura;
    :Supervisor revisa informe;
    :Revisar coordinación (Supervisor);
    :Elaborar oficios de respuesta;
    :Revisar y firmar director (Supervisor);
    :Guardar informe final en BD;
    :Enviar respuesta al usuario;
    :Notificar cierre al Técnico;
    :Informe final al Supervisor;
  }
end group

stop

@enduml`,
  'diagram-declaratoria-camino': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Factibilidad de Declaratoria de Camino Público
subtitle Duración total estimada: 60 días

start

group REGISTRO DE TRÁMITE Y ASIGNACIÓN
  :Ciudadano entrega solicitud y requisitos;
  :Ventanilla registra trámite;
  :Herramienta asigna fase de competencia;
end group

group FASE 1: COMPETENCIA (15 días)
  partition "Técnico Geógrafo\n(Fernanda, Katty, Alicia, Marcelo)" as TecGeo {
    :Verificar competencia;
    if (Es competente?) then (Sí)
      :Revisar requisitos completos;
      if (Requisitos completos?) then (Sí)
        :Elaborar mapa de competencia y pertinencia;
        :Elaborar planimetría en formato SHAPE;
        :Guardar documentos técnicos en BD;
      else (No)
        :Solicitar información al ciudadano;
        :Ventanilla registra información;
      end if
    else (No)
      :Elaborar informe de no competencia;
      :Supervisor revisa informe;
      :Revisar y firmar director (Supervisor);
      :Guardar respuesta en BD;
      :Notificar no competencia al ciudadano;
    end if
  }
end group

group FASE 2: INFORME PARA EL MTOP (45 días)
  partition "Técnico Geógrafo\n(Fernanda, Katty, Alicia, Marcelo)" as TecGeo {
    :Asignar elaboración de informe;
    :Analizar y verificar pertinencia;
    if (Requiere información adicional?) then (Sí)
      :Solicitar información a terceros;
      :Recibir información;
    end if
    :Elaborar informe técnico;
    :Supervisor revisa informe;
    :Revisar coordinación (Supervisor);
    :Elaborar oficios de respuesta al MTOP;
    :Revisar coordinación (oficio máxima autoridad) (Supervisor);
    :Revisión director de vialidad (Supervisor);
    :Revisión y firma Prefecta (Supervisor);
    :Guardar informe final en BD;
    :Enviar respuesta al MTOP;
    note right
      El trámite se cierra cuando
      se envía al MTOP (cierre del trámite)
    end note
    :Notificar cierre al Técnico Geógrafo;
    :Informe final al Supervisor;
  }
end group

stop

@enduml`
};

function loadAndRenderDiagram(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const code = diagramCodes[containerId];
  if (!code) return;

  try {
    container.innerHTML = '<div style="padding:2rem;text-align:center;color:var(--text-secondary)"><div style="font-size:2rem">⏳</div><p>Cargando...</p></div>';
    renderDiagram(code, container, containerId);
  } catch (error) {
    container.innerHTML = `<div style="padding:1.5rem;background:rgba(239,68,68,0.1);border:1px solid #ef4444;border-radius:0.5rem;color:#991b1b"><strong>⚠️ Error:</strong> ${error.message}</div>`;
  }
}

function renderDiagram(code, container, filename) {
  const escapedCode = code.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": "&#039;" }[m]));
  const encodedForCopy = btoa(unescape(encodeURIComponent(code)));

  // Crear un contenedor temporal para enviar a PlantUML
  const tempId = 'temp-' + Date.now();

  container.innerHTML = `
<div style="background:white;padding:1.5rem;border-radius:0.5rem">
    <div style="display:flex;gap:0.5rem;margin-bottom:1rem;border-bottom:2px solid #e2e8f0;padding-bottom:0.5rem;flex-wrap:wrap">
        <button class="tab-btn active" data-tab="preview-${container.id}" style="padding:0.5rem 1rem;background:#2563eb;color:white;border:none;border-radius:0.375rem;cursor:pointer;font-size:0.875rem">👁️ Vista Previa</button>
        <button class="tab-btn" data-tab="code-${container.id}" style="padding:0.5rem 1rem;background:transparent;color:#1e293b;border:1px solid #e2e8f0;border-radius:0.375rem;cursor:pointer;font-size:0.875rem">📝 Código</button>
        <button class="tab-btn" data-tab="links-${container.id}" style="padding:0.5rem 1rem;background:transparent;color:#1e293b;border:1px solid #e2e8f0;border-radius:0.375rem;cursor:pointer;font-size:0.875rem">🔗 Enlaces</button>
    </div>
    
    <div id="preview-${container.id}" class="tab-content">
        <div id="${tempId}" style="text-align:center;padding:2rem;color:#64748b">
            <div style="font-size:2rem">⏳</div>
            <p>Generando diagrama...</p>
        </div>
        <p style="text-align:center;font-size:0.875rem;color:#64748b;margin-top:1rem">💡 <strong>Archivo:</strong> ${filename}</p>
    </div>
    
    <div id="code-${container.id}" class="tab-content" style="display:none">
        <div style="position:relative">
            <pre style="background:#f8fafc;padding:1rem;border-radius:0.5rem;overflow-x:auto;font-size:0.875rem;font-family:monospace;line-height:1.6;max-height:500px;overflow-y:auto"><code>${escapedCode}</code></pre>
            <button onclick="copyCode('${encodedForCopy}')" style="position:absolute;top:0.5rem;right:0.5rem;padding:0.5rem 1rem;background:#10b981;color:white;border:none;border-radius:0.375rem;cursor:pointer;font-size:0.875rem">📋 Copiar</button>
        </div>
    </div>
    
    <div id="links-${container.id}" class="tab-content" style="display:none">
        <div style="display:flex;flex-direction:column;gap:1rem">
            <div style="padding:1rem;background:#f1f5f9;border-radius:0.5rem">
                <h5 style="margin-bottom:0.75rem;font-size:1rem">📄 Archivo Local</h5>
                <a href="../${filename}" target="_blank" style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.75rem 1.25rem;background:#2563eb;color:white;text-decoration:none;border-radius:0.5rem;font-size:0.9375rem;font-weight:500">
                    <span>📂</span><span>Abrir archivo .puml</span>
                </a>
                <p style="margin-top:0.75rem;font-size:0.875rem;color:#64748b">Puedes usar este archivo en tu editor PlantUML favorito</p>
            </div>
            <div style="padding:1rem;background:#fff3cd;border:1px solid #ffc107;border-radius:0.5rem">
                <h5 style="margin-bottom:0.75rem;font-size:1rem">⚠️ Nota sobre la visualización</h5>
                <p style="font-size:0.875rem;color:#856404;line-height:1.6">
                    Para visualizar los diagramas en esta página web, necesitas un servidor local activo.<br>
                    <strong>Usa:</strong> <code style="background:#fff;padding:0.25rem 0.5rem;border-radius:0.25rem;font-family:monospace">python3 -m http.server 8000</code> en la carpeta del proyecto.
                </p>
            </div>
        </div>
    </div>
</div>`;

  setupTabs(container);

  // Generar imagen usando el servicio de PlantUML con formato form
  generatePlantUMLImage(code, tempId);
}

async function generatePlantUMLImage(code, tempId) {
  const tempDiv = document.getElementById(tempId);

  try {
    // Codificar correctamente con UTF-8 y deflate
    const encoded = encodePlantUML(code);

    // Usar la URL pública de PlantUML con el código codificado y el prefijo ~1
    const imageUrl = `https://www.plantuml.com/plantuml/svg/~1${encoded}`;

    if (tempDiv) {
      tempDiv.innerHTML = `
                <div style="background:#f8fafc;padding:1rem;border-radius:0.5rem;overflow-x:auto;text-align:center">
                    <img src="${imageUrl}" alt="Diagrama PlantUML" style="max-width:100%;height:auto" 
                         onerror="this.parentElement.innerHTML='<div style=\\'padding:1.5rem;background:rgba(239,68,68,0.1);border:1px solid #ef4444;border-radius:0.5rem;color:#991b1b\\'><strong>⚠️ Error al cargar diagrama</strong><p style=\\'margin-top:0.5rem;font-size:0.875rem\\'>Usa la pestaña \\'📝 Código\\' para copiar el código y pegarlo en <a href=\\'https://www.plantuml.com/plantuml/uml\\' target=\\'_blank\\' style=\\'color:#2563eb;text-decoration:underline\\'>PlantUML Online</a></p></div>'" />
                </div>`;
    }

  } catch (error) {
    if (tempDiv) {
      tempDiv.innerHTML = `
                <div style="padding:1.5rem;background:rgba(239,68,68,0.1);border:1px solid #ef4444;border-radius:0.5rem;color:#991b1b">
                    <strong>⚠️ Error al procesar diagrama</strong>
                    <p style="margin-top:0.5rem;font-size:0.875rem">
                        ${error.message}
                    </p>
                    <p style="margin-top:1rem;font-size:0.875rem">
                        Usa la pestaña "📝 Código" para ver el código PlantUML y copiarlo a 
                        <a href="https://www.plantuml.com/plantuml/uml" target="_blank" style="color:#2563eb;text-decoration:underline">PlantUML Online</a>
                    </p>
                </div>`;
    }
  }
}

// Implementación de la codificación PlantUML con soporte UTF-8 correcto
function encodePlantUML(text) {
  // Convertir texto a bytes UTF-8 usando TextEncoder
  const utf8Bytes = new TextEncoder().encode(text);

  // Comprimir usando deflate
  const compressed = pako.deflate(utf8Bytes, { level: 9 });

  // Codificar usando el alfabeto especial de PlantUML
  return encode64(compressed);
}

function encode64(data) {
  let r = '';
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';

  for (let i = 0; i < data.length; i += 3) {
    if (i + 2 === data.length) {
      r += append3bytes(data[i], data[i + 1], 0);
    } else if (i + 1 === data.length) {
      r += append3bytes(data[i], 0, 0);
    } else {
      r += append3bytes(data[i], data[i + 1], data[i + 2]);
    }
  }
  return r;

  function append3bytes(b1, b2, b3) {
    const c1 = b1 >> 2;
    const c2 = ((b1 & 0x3) << 4) | (b2 >> 4);
    const c3 = ((b2 & 0xF) << 2) | (b3 >> 6);
    const c4 = b3 & 0x3F;
    return alphabet.charAt(c1) + alphabet.charAt(c2) + alphabet.charAt(c3) + alphabet.charAt(c4);
  }
}

function setupTabs(container) {
  const tabs = container.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => {
        t.style.background = 'transparent';
        t.style.color = '#1e293b';
        t.style.border = '1px solid #e2e8f0';
        t.classList.remove('active');
      });

      this.style.background = '#2563eb';
      this.style.color = 'white';
      this.style.border = 'none';
      this.classList.add('active');

      const targetId = this.dataset.tab;
      container.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
      });
      document.getElementById(targetId).style.display = 'block';
    });
  });
}

function copyCode(encoded) {
  const code = decodeURIComponent(escape(atob(encoded)));
  navigator.clipboard.writeText(code).then(() => {
    alert('✓ Código copiado al portapapeles');
  }).catch(() => {
    alert('❌ Error al copiar');
  });
}

const originalExpandDiagram = window.expandDiagram;
window.expandDiagram = function (diagramId) {
  const diagram = document.getElementById(diagramId);
  const button = diagram?.previousElementSibling?.querySelector('.btn-expand');

  if (diagram && diagram.classList.contains('hidden')) {
    diagram.classList.remove('hidden');
    if (button) button.textContent = 'Ocultar Diagrama';
    if (diagram.querySelector('div[style*="Cargando"]') || !diagram.querySelector('.tab-btn')) {
      loadAndRenderDiagram(diagramId);
    }
  } else if (diagram) {
    diagram.classList.add('hidden');
    if (button) button.textContent = 'Ver Diagrama';
  }
};

console.log('📊 PlantUML Simple Renderer cargado');
