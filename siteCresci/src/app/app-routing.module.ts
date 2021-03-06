import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ContatoComponent } from './contato/contato.component';
import { DoeComponent } from './doe/doe.component';
import { SobreComponent } from './sobre/sobre.component';
import { FaqComponent } from './faq/faq.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EntrarComponent } from './entrar/entrar.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lojinha', component: ProdutosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'doacao', component: DoeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'duvidas', component: FaqComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'entrar', component: EntrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
