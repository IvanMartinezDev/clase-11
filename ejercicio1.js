let diaSemana = prompt("¿Qué día es hoy?");

switch (diaSemana) {
    case "lunes":
        alert("Hoy es lunes.");
        document.write("100 trotes con rodillas arriba");
        break;
    case "martes":
        alert("Hoy es martes.");
        document.write("Sentadillas, Abdominales, Trote con rodillas arriba, Plancha");
        break;
    case "miércoles":
        alert("Hoy es miércoles.");
        document.write("Sprint de pie, Plancha, Tuck jumps, Puente de glúteos");
        break;
    case "jueves":
        alert("Hoy es jueves.");
        document.write("25 elevaciones de piernas, 30 abdominales en V, 120 jumping jacks, 50 patadas de glúteo");
        break;
    case "viernes":
        alert("Hoy es viernes.");
        document.write("10 tuck jumps, 50 giros rusos, 80 jumping jacks, 20 zancadas, 20 burpees");
        break;
    case "sábado":
        alert("Hoy es sábado.");
        document.write("20 basketball jumps (sentadilla profunda con salto y brazos arriba), 30 elevaciones de piernas, 5 planchas-flexiones, 40 trotes con rodillas arriba");
        break;
    case "domingo":
        alert("Hoy es domingo.");
        document.write("Sentadillas, Zancadas, Jumping jacks, Abdominales, bicicletasPuentes"); 
        break;
    default:
        alert("Escribe el día de la semana en minúsculas.");

}