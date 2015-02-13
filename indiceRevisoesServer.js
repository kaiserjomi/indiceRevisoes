Meteor.methods({
//nserirDadosFicha': function(fichaMatriculaVar , fichaMarcaVar , fichaModeloVar , fichaAnoVar)
  'inserirDadosFicha': function(fichaMatriculaVar , fichaMarcaVar , fichaModeloVar, fichaAnoVar,fichaCriadoVar)
  {  
  //var currentUserId = Meteor.userId();
  var itemData = new Date();  //create a new date with current date and time
  itemData.toLocaleDateString();
  

    FichasLista.insert({
    matricula: fichaMatriculaVar,
    marca: fichaMarcaVar,
    modelo: fichaModeloVar,
    ano: fichaAnoVar,
    data1: fichaCriadoVar,
    });
  },

  'removerDadosFicha': function(selectedItem)
  {  
  console.log("removerDadosFicha: " + selectedItem);
  FichasLista.remove(selectedItem);
  
    /*var name=confirm("Quer apagar esta ficha?")
    if (name==true)
    {
    FichasLista.remove(selectedItem);
    }*/
  },

  'inserirDadosRevisao': function( itemSelecionado, listaRepararVar)
  {  
  //var currentUserId = Meteor.userId();
  var itemDataVar = new Date();  //create a new date with current date and time
  var dataVar = itemDataVar.toLocaleDateString();

    Revisoes.insert({
      idFicha: itemSelecionado,
      data: dataVar,
      reparado: listaRepararVar,
    });
  },


});